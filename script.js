const family = [
    {
        name: "John Doe",
        age: 45,
        role: "Father",
        image: "images/father.jpg"
    },
    {
        name: "Jane Doe",
        age: 42,
        role: "Mother",
        image: "images/mother.jpg"
    }
];

const container = document.getElementById("family-members");

family.forEach(member => {
    container.innerHTML += `
        <div class="member-card">
            <img src="${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>Age: ${member.age}</p>
            <p>Role: ${member.role}</p>
        </div>
    `;
});
