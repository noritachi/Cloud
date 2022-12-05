const csharpMainFunction = 
`using System;

namespace HelloWorld
{
  class Program
  {
    static void toDo()
    {
      //Write Your Code Here
      Console.Write("Hello World!");
    }
  
    static void Main(string[] args)
    {
      toDo();
    }
  }
}`

const javaMainFunction = 
`class HelloWorld {
  public static void toDo() {
    //Write Your Code Here
    System.out.print("Hello World!");
  }

  public static void main(String[] args) {
    toDo();
  }
}`

const state = {
  lessonIndex: 0,
  lang: "csharp"
}

const codeArea = document.getElementById("code");

//On Load
for(let i=0; i<lessons.length; i++) {
  const lesson = document.getElementsByClassName("lesson")[i]
  lesson.getElementsByTagName("span")[0].onclick = () => onLessonClick(i)
}

document.getElementsByClassName("requirement-content")[0].innerHTML = lessons[0].requirement

const onLessonClick = (index) => {
  document.getElementsByClassName("result-content")[0].innerHTML = ''
  for(let i=0; i<lessons.length; i++) {
    document.getElementsByClassName("lesson")[i].className = i == index ? "lesson active" : "lesson"
  }
  document.getElementsByClassName("requirement-content")[0].innerHTML = lessons[index].requirement
  state.lessonIndex = index
  codeEditor.setValue(state.lang == "csharp" ? lessons[index].codeCsharp : lessons[index].codeJava)
}

const onProgrammingLanguageChange = e => {
  document.getElementsByClassName("result-content")[0].innerHTML = ''
  codeEditor.setValue(e.value == 
    "csharp" ? lessons[state.lessonIndex].codeCsharp : lessons[state.lessonIndex].codeJava)
  state.lang = e.value
}

codeArea.innerHTML = csharpMainFunction
let codeEditor = CodeMirror.fromTextArea(codeArea, {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-csharp",
    theme: "blackboard",
});

codeEditor.setValue(csharpMainFunction)

codeEditor.setSize("100%", `${window.innerHeight - 190}`);

const onSubmit = async () => {
  const response = fetch('http://localhost:3000/compile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      code: codeEditor.getValue(),
      lang: state.lang
    })
  }).then(response => {
    if(response.status == 200) {
      return response.json()
    }
    else {
      alert("Network Error")
    }
  }).then(result => {
    document.getElementsByClassName("result-content")[0].innerHTML = result
    console.log(lessons[state.lessonIndex].result, result)
    if(lessons[state.lessonIndex].result == result) {
      alert("Congratulations! Mission Completed")
    }
    else {
      alert("Fail!")
    }
  })
}