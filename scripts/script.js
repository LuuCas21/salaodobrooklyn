'use script';

const drop_content = document.querySelector('.dropdown_content');
const bTn = document.querySelector('#bTn_drop');

bTn.addEventListener('click', toggleContent);

function toggleContent() {
    drop_content.classList.toggle('hidden');
}

