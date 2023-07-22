export const showAlert = (message: string, type: string, setAlert: (alert: { message: string; type: string }) => void) => {
    setAlert({ message, type });
};

export const closeAlert = (setAlert: (alert: { message: string; type: string }) => void) => {
    setAlert({ message: '', type: '' });
};
