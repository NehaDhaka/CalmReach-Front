import { toast } from "react-toastify";
import axios from "axios";
import { registerRoute } from "./apiRoutes";

export const tagsOptions = [
  "Stress Management",
  "Relationship Issues",
  "Self-Esteem and Confidence",
  "Coping with Grief and Loss",
  "Anger Management",
  "Mindfulness and Meditation",
  "Life Transitions",
  "Work-Life Balance",
  "Parenting Support",
  "LGBTQ+ Support",
  "Substance Abuse Recovery",
  "Body Image and Eating Disorders",
  "Trauma and PTSD",
  "Social Anxiety",
  "Career Guidance",
];

export const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

const handleValidation = (formData) => {
  const { name, email, password } = formData;
  if (!name) {
    toast.error("Name field can not be empty", toastOptions);
    return false;
  } else if (!email) {
    toast.error("Email field can not be empty", toastOptions);
    return false;
  } else if (!password) {
    toast.error("Password field can not be empty", toastOptions);
    return false;
  } else if (password.length < 8) {
    toast.error(
      "Password length should be greater than or equal to 8 characters",
      toastOptions
    );
    return false;
  }
  return true;
};

export const handleInputChange = (event, setFormData) => {
  const { name, value } = event.target;

  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};

export const handleFormSubmit = async (event, userRole, navigate, formData) => {
  event.preventDefault();
  if (handleValidation(formData)) {
    const {
      name: inputName,
      email: inputEmail,
      password,
      tagOption,
    } = formData;
    const email = inputEmail.toLowerCase();
    const words = inputName.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const name = capitalizedWords.join(" ");
    axios
      .post(registerRoute, {
        name,
        email,
        password,
        tagOption,
        userRole: userRole,
      })
      .then((response) => {
        if (response.data.status === false) {
          toast.error(response.data.message, toastOptions);
        } else {
          sessionStorage.authToken = response.data.userData.token;
          navigate(`/dashboard`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
