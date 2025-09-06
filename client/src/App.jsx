import './App.css'
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import React,{useEffect, useState} from 'react';
import Editor from "react-simple-code-editor";
import axios from 'axios';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css";

function App() {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  const [code, setcode] = useState("enter your code here");

  const [review, setreview] = useState('');
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post('https://codereviewer-1-geui.onrender.com', { code });
      setreview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
    <div  className=" h-[50px] flex justify-center items-center">
    <h1 className="text-zinc-400 hover:text-zinc-500 text-center text-3xl top-2 font-semibold">Code Reviewer</h1>
    </div>
    <main className=" lg:flex md:flex sm:flex gap-5 h-screen">

  <div className="left right  border border-zinc-500 h-full review-scrollbar rounded-md bg-[#141313eb] overflow-auto">
    <div className="code min-h-[full] w-full  text-zinc-400">
      <p className="text-center text-2xl border-b border-b-zinc-500 ">Your Code</p>
      <Editor

        value={code}
        onValueChange={code => setcode(code)}
        highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
        padding={10}
        className="text-white"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
          height: "100%",
          width: "100%",
          borderRadius: "5px",
        }}
      />
    </div>
   <div className="flex justify-end gap-2 p-4">
    <div
      className="clear-btn active:scale-95 transition-all duration-200 ease-in-out text-black bg-red-200 font-semibold hover:bg-red-400 hover:text-white cursor-pointer rounded-lg px-4 py-2"
      onClick={() => { setcode(''); setreview(''); }}
    >
      Clear
    </div>
    <button
      className="review-btn active:scale-95 transition-all duration-200 ease-in-out text-black bg-sky-200 font-semibold hover:bg-sky-400 hover:text-white cursor-pointer rounded-lg px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={reviewCode}
      disabled={!code.trim()}
      type="button"
    >
      Review
    </button>
  </div>

  </div>

  <div className="right review-scrollbar h-full rounded-md text-white border border-zinc-500 overflow-auto bg-[
#292929] px-2 py-5">
  <p className="text-center text-2xl border-b border-b-zinc-500 text-zinc-400">Review</p>
    {loading ? (
      <div className="flex flex-col justify-center items-center p-2 h-full">
        <div className="h-12 w-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mb-5"></div>
        <p className="mt-8 text-gray-200 text-center">Your Code review is in process. <br/> <span>Please wait.</span></p>
      </div>
    ) : (
      <Markdown rehypePlugins={[rehypeHighlight]}>
        
        {review}
      </Markdown>
    )}
  </div>

</main>

    </>
  )
}

export default App