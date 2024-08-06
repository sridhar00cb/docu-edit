import React, { useState, useEffect } from "react";

const Editor = ({ filePath, githubToken }) => {
  const [content, setContent] = useState("");

  // useEffect(() => {
  //   fetch(
  //     `https://api.github.com/repos/<username>/<repo>/contents/${filePath}`,
  //     {
  //       headers: {
  //         Authorization: `token ${githubToken}`,
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setContent(atob(data.content));
  //     });
  // }, [filePath, githubToken]);

  // const handleSave = () => {
  //   fetch(
  //     `https://api.github.com/repos/<username>/<repo>/contents/${filePath}`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         Authorization: `token ${githubToken}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         message: "Update file content",
  //         content: btoa(content),
  //         sha: "<file-sha>", // You need to get the file SHA from the initial fetch
  //       }),
  //     }
  //   );
  // };

  return (
    <div>
      {/* <CodeMirror
        value={content}
        options={{
          mode: "markdown",
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setContent(value);
        }}
      /> */}
      <button>Save</button>
    </div>
  );
};

export default Editor;
