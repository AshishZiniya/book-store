import { toast } from "react-toastify";

const toastHelper = {
  info: (message) => {
    toast.info(`${message}`);
  },
  success: (message) => {
    toast.success(`${message}`);
  },
  warn: (message) => {
    toast.warn(`${message}`);
  },
  error: (message) => {
    toast.error(`${message}`);
  },
};

export default toastHelper;
