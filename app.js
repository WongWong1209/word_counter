let text_area = document.querySelector('#text');
let text_length_text = document.querySelector('#text-length');
let text_remain_word = document.querySelector('#text-remain-word');
let text_target_word_count = document.querySelector('#minimal-word');
let target_word_count = 150;
let wordCount = 0;

UpdateRemainingWord();

text_area.addEventListener('input', e => {
    let text = e.target.value.trim();
    wordCount = text.length > 0 ? text.split(/\s+/).length : 0;
    text_length_text.innerHTML = `Word Count: ${wordCount}`;
    UpdateRemainingWord();
});

text_target_word_count.addEventListener('input', e => {
    console.log(e.target.value);
    let newTarget = parseInt(e.target.value);
    target_word_count = isNaN(newTarget) ? 0 : newTarget;
    UpdateRemainingWord();
});

function UpdateRemainingWord() {
    let less_word = target_word_count - wordCount;
    text_remain_word.innerHTML = `Words remaining: ${less_word > 0 ? less_word : '0'}`;
}