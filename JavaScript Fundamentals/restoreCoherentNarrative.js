// Restore a Coherent Narrative from an Array of Story Fragments

// In this lab, you will restore a coherent narrative from a corrupted array of story fragments.
// You will practice using loops by implementing fundamental array algorithms from scratch.
// You will work with arrays of story fragments objects. Each fragment object has the following properties:

// Property 	Description 	                                                    Example value
// id 	        A positive integer indicating the fragment's position in the story 	3
// text 	    The actual story content 	                                        "and I use Arch btw.\""

// In this lab, you are provided with a prefilled array called shuffledFragments.
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories
// 1.   You should not change the pre-filled 'shuffledFragment' array.
// 2.   You should create a function named 'compactFragments' that takes an array of fragments
//      and returns a new array with all undefined elements removed. If the function removes any
//      undefined elements, it should log a message to the console. The message should start with
//      the prefix [COMPACTED].
// 3.   You should declare a variable named 'compactedShuffledFragments' and assign it the result
//      of calling 'compactFragments' with the 'shuffledFragments' array.
// 4.   You should create a function named 'sortFragments' that takes an array without undefined
//      elements and returns a new array sorted by the id property in ascending order, keeping
//      fragments that share the same id in their original order. You should not use JS built-
//      in sort method.
// 5.   You should declare a variable named 'sortedFragments' and assign it the result of calling
//      'sortFragments' with the 'compactedShuffledFragments' array.
// 6.   You should create a function named 'dedupeFragments' that takes a sorted array of fragments
//      and returns a new array with duplicates removed, keeping only the first occurence. You should
//      define duplicates as  two or more fragments sharing the same id. For each id that is deduplicated,
//      the function should log a message to the console. The message should start with the prefix [DEDUPED].
// 7.   You should declare a variable named 'dedupedFragments' and assign it the result of calling
//      'dedupeFragments' with the 'sortedFragments' array.
// 8.   You should create a function named 'fillMissingFragments' that takes a sorted array of fragments and
//      returns a new array with missing fragments filled with placeholder objects. You should define missing
//      fragments as gaps in the sequence between the lowest and highest id. The placeholder objects should have
//      the format { id: missingId, text: "[...]" }. For each placeholder added, the function should log a
//      message to the console. The message should start with the prefix [FILLED].
// 9.   You should declare a variable named 'filledFragments' and assign it the result of calling 'fillMissingFragments'
//      with the 'dedupedFragments' array.
// 10.  You should create a function named 'assembleStory' that takes a sorted array of fragments and returns a single
//      string containing all fragment texts, separated by newlines.
// 11.  You should use 'assembleStory' with your 'filledFragments' to display the complete story in the console.
// 12.  Your functions 'compactFragments', 'sortFragments', 'dedupeFragments', 'fillMissingFragments' and
//      'assembleStory' should not mutate the array that they are called with.

// Example:
// Here is an example of an array containing story fragments:

// const exampleArray = [
//     { id: 3, text: "and I use Arch btw.\"" },
//     ,
//     { id: 1, text: "Naomi said:" },
//     { id: 3, text: "and I use Arch btw.\"" },
// ];

// After restoring the story from 'exampleArray', it would look like this:

// Naomi said:
// [...]
// and I use Arch btw."

const shuffledFragments = [
    { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
    { id: 12, text: "he lay down beside the course to take a nap" },
    ,
    { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
    { id: 7, text: "but for the fun of the thing he agreed." },
    { id: 19, text: "The Hare now ran his swiftest," },
    ,
    { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
    { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
    { id: 9, text: "marked the distance and started the runners off." },
    ,
    { id: 5, text: "I'll run you a race and prove it.\"" },
    { id: 17, text: "and when at last he did wake up," },
    { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
    { id: 12, text: "he lay down beside the course to take a nap" },
    ,
    { id: 8, text: "So the Fox, who had consented to act as judge," },
    { id: 20, text: "but he could not overtake the Tortoise in time." },
    { id: 5, text: "I'll run you a race and prove it.\"" },
    { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
    ,
    { id: 13, text: "until the Tortoise should catch up." },
    { id: 10, text: "The Hare was soon far out of sight," },
    { id: 12, text: "he lay down beside the course to take a nap" },
    { id: 18, text: "the Tortoise was near the goal." },
];

// 1. compactFragments: Membuang elemen undefined menggunakan .filter()
const compactFragments = arr => {
    const result = arr.filter(item => item !== undefined);
    const deletedCount = arr.length - result.length;

    if (deletedCount > 0) {
        console.log(`[COMPACTED] Removed ${deletedCount} undefined elements.`);
    }

    return result;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

// 2. sortFragment: Mengurutkan array berdasarkan id memakai 
//    Bubble Sort & destructuring swapping tanpa memutasi array asli 
const sortFragments = arr => {
    const copy = [...arr];

    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < (copy.length - i - 1); j++) {
            if (copy[j].id > copy[j + 1].id) {
                [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
            }
        }
    }

    return copy;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

// 3. dedupeFragments: Menghapus duplikat secara efisien menggunakan for loop 
//    dan membandingkan terhadap elemen unik terakhir (lastAdded)
const dedupeFragments = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const lastAdded = result[result.length - 1];

        if (!lastAdded || arr[i].id !== lastAdded.id) {
            result.push(arr[i]);
        } else {
            console.log(`[DEDUPED] Duplicate fragment with ID ${arr[i].id} removed.`);
        }
    }

    return result;
}

const dedupedFragments = dedupeFragments(sortedFragments);

// 4. fillMissingFragments: Menambal fragmen yang hilang dengan menelusuri angka id
//    langsung memakai teknik pointer index.
const fillMissingFragments = arr => {
    const result = [];
    let index = 0;

    if (arr.length === 0) return [];

    for (let i = arr[0].id; i <= arr[arr.length - 1].id; i++) {
        if (arr[index].id === i) {
            result.push(arr[index]);
            index++;
        } else {
            console.log(`[FILLED] Fill fragment with ID ${i} added.`)
            result.push({ id: i, text: "[...]"} );
        }
    }

    return result;
}

const filledFragments = fillMissingFragments(dedupedFragments);

// 5. Merangkai seluruh teks menjadi satu cerita utuh.
const assembleStory = arr => arr.map(fragment => fragment.text).join("\n");

console.log(assembleStory(filledFragments));