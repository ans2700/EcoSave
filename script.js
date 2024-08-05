// Function to calculate energy usage
function calculateEnergy() {
  const electricity = document.getElementById("electricity").value;
  const gas = document.getElementById("gas").value;

  if (electricity && gas) {
    const electricityUsage = parseFloat(electricity);
    const gasUsage = parseFloat(gas);
    const totalEnergy = electricityUsage * 3.6 + gasUsage * 29.3;
    document.getElementById("result").innerText = `
          Your total energy consumption is approximately ${totalEnergy.toFixed(
            2
          )} kWh per month.
          \nElectricity Usage: ${electricityUsage.toFixed(2)} kWh per month
          \nGas Usage: ${gasUsage.toFixed(2)} therms per month
      `;
  } else {
    document.getElementById("result").innerText =
      "Please enter your electricity and gas usage.";
  }
}

// Object containing tips information
const tips = {
  home: {
    title: "Energy Saving Tips for Your Home",
    content: [
      "Use LED bulbs instead of incandescent",
      "Unplug appliances when not in use",
      "Install a programmable thermostat",
      "Seal windows and doors to prevent drafts",
      "Use a smart power strip for electronics",
    ],
  },
  office: {
    title: "Energy Saving Tips for Your Office",
    content: [
      "Use energy-efficient office equipment",
      "Enable power-saving modes on computers",
      "Utilize natural lighting when possible",
      "Turn off equipment when not in use",
      "Regularly maintain HVAC systems",
    ],
  },
  hospital: {
    title: "Energy Saving Tips for Healthcare facilities",
    content: [
      "Use energy-efficient medical equipment",
      "Implement energy-saving practices in heating and cooling",
      "Optimize lighting in patient areas",
      "Regularly maintain equipment",
      "Use smart thermostats to control temperature",
      "Install energy-efficient lighting and HVAC systems",
      "Use advanced energy management systems",
      "Optimize operating room energy use",
      "Implement energy-saving practices in laundry and kitchen",
      "Upgrade to energy-efficient medical imaging equipment",
    ],
  },
  agriculture: {
    title: "Energy Saving Tips for Agriculture",
    content: [
      "Implement water-efficient irrigation systems such as drip irrigation",
      "Schedule irrigation during cooler parts of the day to minimize evaporation",
      "Invest in modern, energy-efficient machinery and equipment",
      "Regularly maintain equipment to ensure optimal performance and energy use",
      "Install solar panels or wind turbines to power farm operations",
      "Use bioenergy from crop residues or animal manure",
      "Insulate barns, greenhouses, and storage facilities to reduce heating and cooling energy use",
      "Implement practices that improve feed efficiency and reduce energy use",
      "Use energy-efficient heating systems for livestock housing",
      "Reduce the number of tillage passes to conserve soil moisture and reduce fuel consumption",
      "Utilize energy-efficient lighting and heating systems in farm buildings",
      "Use weather forecasts to plan farming activities and reduce energy use",
    ],
  },
  transportation: {
    title: "Energy Saving Tips for Transportation",
    content: [
      "Carpool or use public transport",
      "Maintain your vehicle regularly",
      "Plan and combine trips to reduce travel",
      "Use fuel-efficient driving techniques",
      "Consider hybrid or electric vehicles",
    ],
  },
};

// Function to display the selected tip in a modal
function showTip(tipType) {
  const tip = tips[tipType];
  if (tip) {
    document.getElementById("modal-title").innerText = tip.title;
    
    // Create a list of tips
    const list = document.createElement("ul");
    tip.content.forEach(item => {
      const listItem = document.createElement("li");
      listItem.innerText = item;
      list.appendChild(listItem);
    });
    
    // Clear existing content and append the list
    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = "";
    modalContent.appendChild(list);

    document.getElementById("modal").style.display = "block";
  }
}

// Function to close the modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Handle form submission (for demonstration purposes)
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission for demo
    alert("Thank you for contacting us! Your message has been sent.");
  });
