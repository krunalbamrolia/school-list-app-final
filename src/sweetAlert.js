import Swal from 'sweetalert2';

export const showAlert = (title, message, icon) => {
  Swal.fire({
    title: title,
    text: message,
    icon: icon,
  });
};

export const showSuccessAlert = (title, message) => {
  showAlert(title, message, 'success');
};

export const showErrorAlert = (title, message) => {
  showAlert(title, message, 'error');
};

export const showInfoAlert = (title, message) => {
  showAlert(title, message, 'info');
};
