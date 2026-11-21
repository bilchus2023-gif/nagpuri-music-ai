
"use client";

import { useState } from "react";

export default function Home() {
  const [lyrics, setLyrics] = useState("");
  const [language, setLanguage] = useState("Nagpuri");
  const [voice, setVoice] = useState("Female");
  const [style, setStyle] = useState("Nagpuri Folk");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b1020",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "24px 16px"
    }}>
      <header style={{
        maxWidth: "850px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ color: "#a78bfa" }}>🎵 Nagpuri Music AI</h2>
        <button style={{
          background: "#7c3aed",
          color: "white",
          border: 0,
          padding: "10px 16px",
          borderRadius: "10px"
        }}>Login</button>
      </header>

      <section style={{
        maxWidth: "700px",
        margin: "65px auto",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "36px", lineHeight: 1.2 }}>
          Create Your Own AI Music
        </h1>
        <p style={{ color: "#b8bfd3", lineHeight: 1.7 }}>
          Apne lyrics se AI song banayein.
          Nagpuri, Sadri aur Hindi music ek hi jagah.
        </p>

        <div style={{
          background: "#171e32",
          padding: "22px",
          borderRadius: "18px",
          textAlign: "left",
          marginTop: "30px"
        }}>
          <label>Apne Song Lyrics Likhein</label>
          <textarea
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
            placeholder="Yahan apne gaane ke lyrics likhein..."
            style={{
              width: "100%",
              minHeight: "150px",
              marginTop: "10px",
              padding: "14px",
              boxSizing: "border-box",
              borderRadius: "10px",
              background: "#0b1020",
              color: "white",
              border: "1px solid #454d65",
              fontSize: "16px"
            }}
          />

          <label>Song Language</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}
            style={field}>
            <option>Nagpuri</option>
            <option>Sadri</option>
            <option>Hindi</option>
          </select>

          <label>Voice</label>
          <select value={voice} onChange={(e) => setVoice(e.target.value)}
            style={field}>
            <option>Female</option>
            <option>Male</option>
            <option>Duet</option>
          </select>

          <label>Music Style</label>
          <select value={style} onChange={(e) => setStyle(e.target.value)}
            style={field}>
            <option>Nagpuri Folk</option>
            <option>Christian Worship</option>
            <option>Christmas Song</option>
            <option>Sad Song</option>
            <option>Romantic</option>
          </select>

          <button
            onClick={() => alert("Music generation service abhi connect nahi hua hai.")}
            style={{
              width: "100%",
              padding: "16px",
              marginTop: "22px",
              background: "#7c3aed",
              color: "white",
              border: 0,
              borderRadius: "10px",
              fontSize: "17px",
              fontWeight: "bold"
            }}>
            🎵 Generate Music
          </button>
          <p style={{ color: "#9ca3af", fontSize: "12px" }}>
            Music generation service will be connected in a later step.
          </p>
        </div>
      </section>

      <footer style={{
        textAlign: "center",
        color: "#8992a8",
        fontSize: "13px"
      }}>
        © 2026 Nagpuri Music AI
      </footer>
    </main>
  );
}

const field = {
  width: "100%",
  padding: "13px",
  marginTop: "9px",
  marginBottom: "18px",
  background: "#0b1020",
  color: "white",
  border: "1px solid #454d65",
  borderRadius: "9px",
  fontSize: "15px"
};
