

export function Validation({ formData }) {
  let newErrors = [];

  Object.keys(formData).forEach(key => {
    if (formData[key].length === 0) {
      newErrors.push({ [key]: `O campo ${key} é obrigatório` });
    }
  });

  return newErrors
}