const API_KEY = "AQ.Ab8RN6JhmBec55Kosfs1_oYeN215LNgErV6blhTpGW65deeeqA"
let output = document.getElementById("text_output")
let submit = document.getElementById("submit")
let input = document.getElementById("text_input")
let request = "I will give you a word inside {} at the end I want you to give me it's meaning in it's language(for example if I sent a french word give me it's meaning in french) do all languages but priorotise french no added stuff"
submit.addEventListener("click", async () =>{
    console.log(input.value)
    output.innerText = await get_def((request + "{" + input.value + "}" ))
})
async function get_def(input){
const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-goog-api-key": API_KEY,
  },
  body: JSON.stringify({
    contents: [{ parts: [{ text: input }] }],
  }),
})
const data = await res.json()
return data.candidates[0].content.parts[0].text
}