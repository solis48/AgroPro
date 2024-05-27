document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact-form');
  const mailerName = document.querySelector('.name');
  const email = document.querySelector('.email');
  const message = document.querySelector('.message');

  const service_id = 'service_gr6wfks';
  const template_id = 'template_jyrd4ir';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const params = {
      from_name: mailerName.value,
      from_email: email.value,
      message: message.value
    };
    emailjs.send(service_id, template_id, params).then(() => {
      mailerName.value = ''
      email.value = ''
      message.value = ''
      alert('Email Sent Successfully!');
    }, (error) => {
      alert('Email Not Sent', error);
    });
  });
});