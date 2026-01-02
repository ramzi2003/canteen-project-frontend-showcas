# UCA Canteen Management System - Frontend

> **Note:** This is a public showcase repository of the original Canteen Management System project, which is maintained as a private repository. This public version serves as a demonstration of the system's capabilities and architecture.

## 📋 Overview

The UCA Canteen Management System is a comprehensive web application designed for the University of Central Asia to manage all aspects of their canteen operations. This React-based frontend application provides an intuitive interface for managing clients, food services, accounting, cash transactions, and administrative tasks.

## ✨ Features

### 🏠 Dashboard
- Main dashboard with overview of system operations
- Real-time statistics and analytics
- Quick access to all modules

### 👥 Client Management
- **Student Management**: Complete student database and account management
- **Faculty Management**: Faculty member profiles and accounts
- **Contractor Management**: Contractor information and tracking
- **Guest Management**: Guest registration and temporary access
- **Department Management**: Add and manage departments
- **Financial Operations**: 
  - Add money to client accounts
  - Withdraw money from accounts
  - Change department assignments
  - Balance tracking

### 🍽️ Canteen Management
- **Menu Categories**:
  - Breakfast
  - Lunch
  - Dinner
  - Coffee Break
  - Soups
  - Desserts
  - Drinks
  - Garnish
- **Inventory Management**: Track out-of-stock items
- **Menu Planning**: Weekly menu planning capabilities
- **Stock Reports**: Comprehensive stock management

### 💰 Cash Management
- Transaction processing for different meal periods
- Breakfast, Lunch, Dinner, and Coffee Break transactions
- Distribution management
- Transaction history tracking
- Real-time cash flow monitoring

### 📊 Accounting Module
- **ROPs (Reports of Operations)**: Generate and manage operational reports
- **Balance Deposit Log**: Track all balance deposits
- **Withhold from Salary**: Manage salary deductions
- **Monthly Reports**: Comprehensive monthly financial reports
- **New ROP Creation**: Create new operational reports

### 🏢 Reception Management
- **Card Management**:
  - Corporate Card management
  - Guest Card management
  - Ordinary Card management
- **Card Registration**: Add new cards to the system

### 👨‍💼 Admin Management
- **User Management**:
  - Admin accounts
  - Cashier accounts
  - Booker accounts
  - Reception staff accounts
- **System Settings**: Configure system-wide settings
- **Role-based Access Control**: Manage permissions and access levels

### 🔐 Authentication
- Secure sign-in and sign-up functionality
- User session management
- Role-based access control

## 🛠️ Technology Stack

### Core Framework
- **React** 17.0.2
- **React Router DOM** 5.2.0
- **React Scripts** 4.0.3

### UI Framework & Styling
- **Material-UI (MUI)** 5.9.1
- **Emotion** (CSS-in-JS)
- **Custom VUI Components**: Custom component library built on top of MUI
- **React Icons** 4.3.1
- **Material Icons**

### Data Visualization
- **ApexCharts** 3.32.0
- **React ApexCharts** 1.3.9

### Forms & Validation
- **Formik** 2.2.9
- **Yup** 0.32.9

### Additional Libraries
- **React Table** 7.7.0 - Advanced table functionality
- **React Select** 4.3.1 - Enhanced select components
- **React Quill** 2.0.0 - Rich text editor
- **Flatpickr** 4.6.9 - Date picker
- **FullCalendar** 5.9.0 - Calendar component
- **React Kanban** 2.1.0 - Kanban board functionality
- **Dropzone** 6.0.0 - File upload handling
- **Three.js** 0.121.1 - 3D graphics (for visualizations)
- **UUID** 8.3.2 - Unique ID generation

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **React Testing Library** - Component testing

## 📦 Installation

### Prerequisites
- **Node.js** (v14 or higher recommended)
- **npm** or **yarn** package manager
- **Git**

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Canteen-project-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Configure environment variables** (if needed)
   - Create a `.env` file in the root directory
   - Add any required API endpoints or configuration values

4. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

   The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Clean Installation

If you encounter dependency issues, you can perform a clean installation:

```bash
npm run install:clean
```

## 🚀 Usage

1. **Access the Application**
   - Navigate to `http://localhost:3000` in your browser
   - The application will redirect to the sign-in page

2. **Authentication**
   - Sign in with your credentials
   - Or create a new account using the sign-up page

3. **Navigate the System**
   - Use the sidebar navigation to access different modules
   - Each module provides specific functionality for managing canteen operations

4. **Dashboard**
   - Start from the main dashboard to get an overview
   - Access quick links to frequently used features

## 📁 Project Structure

```
Canteen-project-frontend/
├── public/                 # Static files
│   ├── index.html
│   ├── favicon.png
│   └── manifest.json
├── src/
│   ├── assets/            # Images, themes, and static assets
│   │   ├── images/
│   │   └── theme/         # Theme configuration
│   ├── components/        # Reusable UI components (VUI)
│   │   ├── VuiBox/
│   │   ├── VuiButton/
│   │   ├── VuiInput/
│   │   └── ...
│   ├── context/           # React context providers
│   ├── examples/          # Example components and layouts
│   │   ├── Breadcrumbs/
│   │   ├── Cards/
│   │   ├── Charts/
│   │   ├── Navbars/
│   │   └── ...
│   ├── layouts/           # Main application layouts
│   │   ├── accounting/    # Accounting module
│   │   ├── admin/         # Admin module
│   │   ├── authentication/# Auth pages
│   │   ├── canteen/       # Canteen management
│   │   ├── cash/          # Cash management
│   │   ├── clients/       # Client management
│   │   ├── dashboards/    # Dashboard pages
│   │   ├── pages/         # General pages
│   │   └── reception/     # Reception module
│   ├── App.js            # Main App component
│   ├── index.js           # Entry point
│   └── routes.js          # Route configuration
├── package.json
├── jsconfig.json
└── README.md
```

## 🎨 Customization

### Theme Configuration
The application uses a custom theme system located in `src/assets/theme/`. You can customize:
- Colors
- Typography
- Component styles
- Breakpoints
- Shadows and borders

### Adding New Routes
Routes are configured in `src/routes.js`. Add new routes following the existing pattern.

### Custom Components
The project uses a custom VUI (Vision UI) component library. Components are located in `src/components/`.

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)
- `npm run install:clean` - Clean install (removes node_modules and reinstalls)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Important Notes

### Public Showcase Repository
This repository is a **public showcase** of the original Canteen Management System project. The original project is maintained as a private repository and contains:
- Production configurations
- Sensitive API endpoints
- Internal documentation
- Full deployment configurations

This public version demonstrates the system's architecture, features, and implementation while maintaining privacy for production-specific details.

### Development Considerations
- The application uses React 17 with legacy OpenSSL provider flags for compatibility
- Some features may require backend API integration
- Environment variables may need to be configured for full functionality

## 👥 Author

**University of Central Asia (UCA)**

## 📄 License

This project is a showcase repository. Please refer to the original project for licensing information.

## 🤝 Contributing

As this is a showcase repository, contributions may be limited. For issues or questions related to the original project, please contact the development team at the University of Central Asia.

## 📞 Support

For support or inquiries about the original project, please contact the University of Central Asia development team.

---

**Version:** 3.0.0  
**Last Updated:** 2024
