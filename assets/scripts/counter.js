$(document).ready(function () {
  // Function to increment a counter
  function incrementCounter(element, finalValue, skipInterval) {
    let currentValue = 0;
    const incrementInterval = 30; // Adjust the increment speed as needed

    const intervalId = setInterval(function () {
      element.text((currentValue = currentValue + skipInterval));

      if (currentValue >= finalValue) {
        clearInterval(intervalId);
      }
    }, incrementInterval);
  }

  // Create an Intersection Observer for each counter
  const patientElement = $("#patientCounter");
  const doctorElement = $("#doctorCounter");
  const experienceElement = $("#experienceCounter");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === patientElement[0]) {
          incrementCounter(patientElement, 5000, 100);
        } else if (entry.target === doctorElement[0]) {
          incrementCounter(doctorElement, 5, 1);
        } else if (entry.target === experienceElement[0]) {
          incrementCounter(experienceElement, 10, 1);
        }
        observer.unobserve(entry.target); // Unobserve the element after it's in the viewport
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);

  // Observe the counter elements
  observer.observe(patientElement[0]);
  observer.observe(doctorElement[0]);
  observer.observe(experienceElement[0]);
});


