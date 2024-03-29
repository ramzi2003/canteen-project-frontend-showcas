import React, { useState, useEffect } from 'react';

const ClientsPage = () => {
  const [clientData, setClientData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let accessToken = localStorage.getItem('accessToken');
        console.log('Access Token:', accessToken);
        if (!accessToken) {
          throw new Error('Access token is missing. Please sign in.');
        }

        const clientId = 2;

        const apiResponse = await fetch(`http://localhost:8080/api/clients/${clientId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!apiResponse.ok) {
          // Check if token is expired
          if (apiResponse.status === 401) {
            // Refresh token
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
              throw new Error('Refresh token is missing. Please sign in again.');
            }

            const refreshResponse = await fetch('http://localhost:8080/api/auth/refresh', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${refreshToken}`,
                'Content-Type': 'application/json',
              },
            });

            if (!refreshResponse.ok) {
              throw new Error('Failed to refresh token.');
            }

            const { newAccessToken } = await refreshResponse.json();
            accessToken = newAccessToken;
            localStorage.setItem('accessToken', accessToken);

            // Retry fetching client data with the new access token
            const retryResponse = await fetch(`http://localhost:8080/api/clients/${clientId}`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            });

            if (!retryResponse.ok) {
              throw new Error('Failed to fetch data after token refresh.');
            }

            const result = await retryResponse.json();
            setClientData(result);
            setError(null);
            return;
          } else {
            throw new Error('Failed to fetch data.');
          }
        }

        const result = await apiResponse.json();
        console.log('Fetched Client Data:', result); // Log the fetched data
        setClientData(result);
        setError(null);
      } catch (error) {
        console.error('Fetch Data Error:', error);
        setError('Error fetching data. Please try again.');
        setClientData(null);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {error && <p>{error}</p>}
      {clientData && (
        <div>
          <h2>Client Information:</h2>
          <p style={{ color: 'white' }}>
            <strong>Name:</strong> {clientData.data.name}
          </p>
          <p style={{ color: 'white' }}>
            <strong>Email:</strong> {clientData.data.email}
          </p>
          <p style={{ color: 'white' }}>
            <strong>Age:</strong> {clientData.data.age}
          </p>
          <p style={{ color: 'white' }}>
            <strong>Gender:</strong> {clientData.data.gender}
          </p>
        </div>
      )}
      {!clientData && !error && <p>Loading...</p>}
    </div>
  );
};

export default ClientsPage;
