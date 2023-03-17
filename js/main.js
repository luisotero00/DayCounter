const calculateBtn = document.getElementById('calculate-btn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const dob = document.getElementById('dob').value;
    const dobDate = new Date(dob);
    const todayDate = new Date();
    const diffTime = Math.abs(todayDate - dobDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    result.innerText = `Llevas ${diffDays} días de vida.`;
});
