const profiles = [
  {
    pic: "https://randomuser.me/portraits/men/24.jpg",
    name: "Jack Wiliams",
    age: 36,
    location: "Los Angeles",
    seek: "Female",
    job: "Computer Engineer"
  },
  {
    pic: "https://randomuser.me/portraits/men/30.jpg",
    name: "Jacobe Mandale",
    age: 24,
    location: "Toronto",
    seek: "Female",
    job: "Business Manager"
  },
  {
    pic: "https://randomuser.me/portraits/men/15.jpg",
    name: "Lary Watson",
    age: 30,
    location: "Calgary",
    seek: "Female",
    job: "Network Engineer"
  },
  {
    pic: "https://randomuser.me/portraits/women/16.jpg",
    name: "Leila Capro",
    age: 30,
    location: "Paris",
    seek: "Male",
    job: "Fashion Designer"
  },
  {
    pic: "https://randomuser.me/portraits/women/20.jpg",
    name: "Emma Green",
    age: 26,
    location: "London",
    seek: "Male",
    job: "Medical Student"
  }
];

// iterator
function iterator(profiles) {
  let nextProfile = 0;

  return {
    next: function() {
      return nextProfile < profiles.length
        ? { value: profiles[nextProfile++], done: false }
        : { done: false };
    }
  };
}

document.getElementById("next").addEventListener("click", nextProfile);

const itr = iterator(profiles);
nextProfile();

function nextProfile() {
  const profile = itr.next().value;
  if (profile !== undefined) {
    const prf = document.getElementById("profile");
    prf.innerHTML = `<div id="img-content">
    <img src=${profile.pic} alt="profile-img" />
    <a href="#" id="show">Show Profile</a>
  </div>
  <div id="pro-content" class="margin-left-2">
    <h2 id="name-profile">${profile.name}</h2>
    <ul>
      <li>Age: ${profile.age}</li>
      <li>Location: ${profile.location}</li>
      <li>Looking for: ${profile.seek}</li>
      <li>Job: ${profile.job}</li>
    </ul>
  </div>`;
  } else {
    window.location.reload();
  }
}
