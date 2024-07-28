// Directory List
const directory = [
    {
        name: "Ms. Divija Bhasin",
        description: "Counselling Psychologist. DM on Instagram to book a therapy session.",
        contact: ""
    },
    {
        name: "Ms. Ipsa James",
        description: "Queer and Dalit affirmative and trauma-informed psychotherapist and counsellor dealing with depression, anxiety, relationships, etc.",
        contact: ""
    },
    {
        name: "Dr. Jini K. Gopinath",
        description: "Chief Psychology Officer at YourDost and President, Indian Association of Clinical and Academic Hypnosis (IACAH).",
        contact: ""
    },
    {
        name: "Ms. Kamna Chhibber",
        description: "Head of Mental Health at Department of Mental Health and Behavioral Sciences, Fortis Healthcare.",
        contact: ""
    },
    {
        name: "Dr. Michelle Frank",
        description: "Director at Health & Wellness at Naima.",
        contact: ""
    },
    {
        name: "Ms. Mimansa Singh Tanwar",
        description: "Cognitive Behavioural Therapist with a keen interest in adolescent mental health. Conducts workshops for parents, teachers, and students.",
        contact: ""
    },
    {
        name: "Ms. Mrinalinee Rana",
        description: "Clinical psychologist specializing in neuropsychology. Works with children, adolescents, adults, and the elderly.",
        contact: ""
    },
    {
        name: "Ms. Nupur Dhakephalkar",
        description: "Proficient clinical psychologist & Neuropsychology expert practicing in Pune.",
        contact: ""
    },
    {
        name: "Ms. Puroitree Majumdar",
        description: "Experienced Clinical Psychologist focusing on Child and Adolescent Mental Health, neuropsychology, and sexuality.",
        contact: ""
    },
    {
        name: "Ms. Rashi Bijlani",
        description: "Dance Movement Psychotherapist, founder of Asha Hai. Works with children to identify early signs of delay.",
        contact: ""
    },
    {
        name: "Dr. Shilpa Aggarwal",
        description: "Extensive experience in child & youth psychiatry, de-addiction psychiatry, psychotherapy, teaching, and motivational work.",
        contact: ""
    },
    {
        name: "Dr. (Prof) Shaunak Ajinkya",
        description: "Consultant Psychiatrist at Kokilaben Dhirubhai Ambani Hospital.",
        contact: ""
    },
    {
        name: "Ms. Sudipta Majumdar",
        description: "Consultant Clinical Psychologist primarily dealing with depression, bipolar, OCD, and relationship issues in adolescents and adults.",
        contact: ""
    },
    {
        name: "Ms. Swarnima Bhargava",
        description: "Assistant Professor at Tata Institute of Social Sciences. Experienced Clinical Psychologist working with child and adolescent mental health.",
        contact: ""
    }
];

const directoryList = document.getElementById('directory-list');
if (directoryList) {
    directory.forEach(item => {
        const div = document.createElement('div');
        div.className = 'directory-item';
        div.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><a href="${item.contact}" target="_blank">${item.contact}</a>`;
        directoryList.appendChild(div);
    });
}

// Resources List
const resources = [
    { name: "Resource 1", description: "Description of resource 1" },
    { name: "Resource 2", description: "Description of resource 2" },
    { name: "Resource 3", description: "Description of resource 3" }
];

const resourcesList = document.getElementById('resources-list');
if (resourcesList) {
    resources.forEach(resource => {
        const div = document.createElement('div');
        div.className = 'resource-item';
        div.innerHTML = `<h3>${resource.name}</h3><p>${resource.description}</p>`;
        resourcesList.appendChild(div);
    });
}

// Forum
const forum = document.getElementById('forum');
const newPostInput = document.getElementById('new-post');

function addPost() {
    const postText = newPostInput.value;
    if (postText) {
        const div = document.createElement('div');
        div.className = 'forum-post';
        div.innerHTML = `<p>${postText}</p>`;
        forum.appendChild(div);
        newPostInput.value = '';
    }
}

// Mood Tracker
const ctx = document.getElementById('moodChart').getContext('2d');
const moodData = {
    labels: [],
    datasets: [{
        label: 'Mood Over Time',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const moodChart = new Chart(ctx, {
    type: 'line',
    data: moodData,
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                }
            }
        }
    }
});

const moodForm = document.getElementById('mood-form');
moodForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const moodSelect = document.getElementById('mood');
    const selectedMood = moodSelect.value;

    moodData.labels.push(new Date());
    moodData.datasets[0].data.push(selectedMood);

    moodChart.update();
});
