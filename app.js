var nav = document.getElementById("navel1")
nav.addEventListener('mouseover', () =>
{  let anc = document.getElementById('ac1')
    let line = document.getElementById('line1')
    anc.style.color='#C2CEEA';
    line.style.backgroundColor = '#C5D1EC';
    line.style.width='100px';

})
nav.addEventListener('mouseout', () => {
    let anc = document.getElementById('ac1')
    let line = document.getElementById('line1');
    line.style.width = '50px'; // Original width
    line.style.backgroundColor = 'rgb(100 116 139)';
    anc.style.color='rgb(100 116 139)';

  });
nav.addEventListener("click" , () =>
{
  this.removeEventListener('mouseout',()=>
{
    let anc = document.getElementById('ac1')
    let line = document.getElementById('line1')
    anc.style.color='#C2CEEA';
    line.style.backgroundColor = '#C5D1EC';
    line.style.width='100px';
})
})
var nav = document.getElementById("navel2")
nav.addEventListener('mouseover', () =>
{
    let anc = document.getElementById('ac2')
    let line = document.getElementById('line2')
    line.style.backgroundColor = '#C5D1EC';
    anc.style.color='#C2CEEA';
    line.style.width='100px';
})
nav.addEventListener('mouseout', () => {
    let anc = document.getElementById('ac2')
    let line = document.getElementById('line2');
    line.style.width = '50px'; // Original width
    line.style.backgroundColor = 'rgb(100 116 139)';
    anc.style.color='rgb(100 116 139)';
  });
var nav = document.getElementById("navel3")
nav.addEventListener('mouseover', () =>
{
    let anc = document.getElementById('ac3')
    let line = document.getElementById('line3')
    line.style.width='100px';
    line.style.backgroundColor = '#C5D1EC';
    anc.style.color='#C5D1EC';
})
nav.addEventListener('mouseout', () => {
    let anc = document.getElementById('ac3')
    let line = document.getElementById('line3');
    line.style.width = '50px'; // Original width
    line.style.backgroundColor = 'rgb(100 116 139)';
    anc.style.color='rgb(100 116 139)';
  });
  function handleViewportChange(event) {
    if (event.matches) {
      var abt = document.getElementById('abt');
      abt.innerHTML="About";
      var exp = document.getElementById('expri');
      exp.innerHTML ="Exprience";
      var p = document.getElementById('p');
      p.innerHTML ="Projects";
    } else {
      var abt = document.getElementById('abt');
      abt.innerHTML="";
      var exp = document.getElementById('expri');
      exp.innerHTML ="";
      var p = document.getElementById('p');
      p.innerHTML ="";
    }
}
const mediaQuery = window.matchMedia('(max-width: 1190px)');
mediaQuery.addEventListener('change', handleViewportChange);
document.getElementById('cvcoll').addEventListener('click', function() {
  // Create a link element
  const link = document.createElement('a');
  
  // Set the href to the file location
  link.href = 'pics/Screenshot (19).png'; // Change this to the path of your file
  
  // Set the download attribute to the desired file name
  link.download = 'Screenshot (19).png'; // Change this to the desired file name
  
  // Append the link to the body
  document.body.appendChild(link);
  
  // Programmatically click the link to trigger the download
  link.click();
  
  // Remove the link from the document
  document.body.removeChild(link);
});
document.addEventListener('DOMContentLoaded', () => {
  // Create the custom cursor element
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  // Update the position of the cursor element based on mouse movement
  document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
  });
});

document.getElementById('gmail').addEventListener('click', function() {
  // Get the input element
  const gmailInput = document.getElementById('gmailInput');
  
  // Select the text field
  gmailInput.select();
  gmailInput.setSelectionRange(0, 99999); // For mobile devices
  
  // Copy the text inside the text field
  document.execCommand('copy');
  
  // Alert the copied text
  alert('Copied to clipboard');
});