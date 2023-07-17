import '../../css/style.css';

export   const render = (templateId: string, data: { [key: string]: number }) => {
  const template = document.getElementById(templateId);
  const container = document.getElementById('container');

  if (container) {
    container.innerHTML = '';

    if (template instanceof HTMLTemplateElement) {
      const clone = document.importNode(template.content, true);
      
      for (const key in data) {
        const element = clone.getElementById(key);

        if (element) {
          element.textContent = data[key].toString();
        }
      }
    
      container.appendChild(clone);
    }
  }
};
