let output = document.getElementById("text_output")
let submit = document.getElementById("submit")
let input = document.getElementById("text_input")
let request = "I will give you a word inside {} at the end I want you to give me it's meaning in it's language(for example if I sent a french word give me it's meaning in french) do all languages but priorotise french no added stuff"
submit.addEventListener("click", async () =>{
    console.log(input.value)
    getGeminiResponse(request + "{" + input.value + "}" )
})
async function getGeminiResponse(userPrompt) {
  const res = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: userPrompt })
  });
 
  const data = await res.json();
   console.log("Response from server:", data);
   if (data.error) {
      console.error("Gemini API Error:", data.error.message || data.error);
      return;
    }
    if (!data.candidates || data.candidates.length === 0) {
      console.error("No candidates returned from Gemini:", data);
      return;
    }
  
  const answer = data.candidates[0].content.parts[0].text;
  console.log("Gemini Answer:", answer);
  output.innerText = answer;
}