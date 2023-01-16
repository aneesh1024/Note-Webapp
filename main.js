const notesBody = document.querySelector('.notes-body');
const addMoreBtn = document.querySelector('.add-more');
const notesContent = document.querySelectorAll('.notes-content');
let saveBtns = document.querySelectorAll('.note-save');
let removeBtns = document.querySelectorAll('.note-remove');
var notesElementArray = null;
var notesCount = 0;
var noteArray = [];
function addNote(body) {
    notesCount += 1;
    body.innerHTML += `<div class="note">
                            <textarea name="notes" id="" cols="20" rows="10" placeholder="Enter your note here..." ></textarea>
                            <p class="notes-content"></p>
                            <div className="btn-div">
                                <button class="note-save btn" onclick="">Save</button>
                                <button class="note-remove btn" onclick="">Remove</button>
                            </div>
                        </div>`
    saveBtns = document.querySelectorAll('.note-save')
    removeBtns = document.querySelectorAll('.note-remove');
    saveBtns.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentElement.parentElement.children[1].style.display = "block";
            item.parentElement.parentElement.children[1].innerHTML = item.parentElement.parentElement.children[0].value
            item.parentElement.parentElement.children[0].style.display = "none";
            item.style.display = "none";
        });
    })
    removeBtns.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentElement.parentElement.remove();
        })
    })

    if (notesBody.children.length > 0) {
        notesBody.style.padding = "1rem";
    }
}


// Animate objects when come in viewport
const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
};
const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
});