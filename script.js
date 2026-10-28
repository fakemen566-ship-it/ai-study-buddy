const notes = document.querySelector("#notes");
const task = document.querySelector("#task");
const output = document.querySelector("#output");
const message = document.querySelector("#message");

const instructions = {
  summary: "Summarize the notes in clear language. Organize the key ideas under headings, define important terms, and finish with 5 key takeaways.",
  flashcards: "Turn the notes into 10 flashcards. Put one question on each card and a concise answer beneath it. Focus on understanding, not just memorization.",
  quiz: "Create a practice quiz from the notes with 8 questions of mixed difficulty. Put the answer key at the end and briefly explain each answer.",
  explain: "Explain the notes to a beginner. Use simple language, explain technical terms, and include a practical example where useful."
};

document.querySelector("#generate").addEventListener("click", () => {
  const text = notes.value.trim();
  if (!text) {
    message.textContent = "Add your notes first, then generate a prompt.";
    notes.focus();
    return;
  }
  output.value = `${instructions[task.value]}\n\nUse only the information in the notes below. If something is unclear or missing, say so rather than inventing details.\n\nNOTES:\n${text}`;
  message.textContent = "Prompt created. Copy it into the AI assistant you use.";
});

document.querySelector("#copy").addEventListener("click", async () => {
  if (!output.value.trim()) {
    message.textContent = "Generate a prompt first.";
    return;
  }
  try {
    await navigator.clipboard.writeText(output.value);
    message.textContent = "Copied to clipboard.";
  } catch {
    output.focus();
    output.select();
    message.textContent = "Select the prompt and copy it manually.";
  }
});
