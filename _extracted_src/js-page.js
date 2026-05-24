/* global React, CodeBlock, Tabs, Collapse, SectionTitle, Callout */

// =============== JAVASCRIPT ===============
function JsPage() {
  return (
    <>
      <div className="page-eyebrow">前端網頁程式 / 03</div>
      <h1 className="page-title">JavaScript</h1>
      <p className="page-subtitle">
        JavaScript 賦予網頁互動能力。從變數、函式到 DOM 操作、非同步請求，是現代前端開發不可或缺的語言。
      </p>

      <Tabs tabs={[
        { label: "程式語法", badge: "Syntax", content: (
          <>
            <SectionTitle hash="vars">變數與型別</SectionTitle>
            <CodeBlock lang="js" file="vars.js" code={`// 變數宣告
const PI = 3.14159;     // 常數
let count = 0;          // 可變變數

// 基本型別
const name = "小明";       // string
const age = 25;           // number
const ok = true;          // boolean
const data = null;        // null
const list = [1, 2, 3];   // array
const user = { name, age }; // object`} />

            <SectionTitle hash="fn">函式</SectionTitle>
            <CodeBlock lang="js" file="fn.js" code={`// 一般函式
function add(a, b) {
  return a + b;
}

// 箭頭函式
const multiply = (a, b) => a * b;

// 預設參數
const greet = (name = "Guest") => {
  return \`Hello, \${name}!\`;
};`} />

            <SectionTitle hash="async">非同步</SectionTitle>
            <CodeBlock lang="js" file="async.js" code={`// async / await
async function fetchUser(id) {
  const res = await fetch(\`/api/users/\${id}\`);
  const data = await res.json();
  return data;
}

fetchUser(1)
  .then(user => console.log(user))
  .catch(err => console.error(err));`} />
          </>
        )},
        { label: "程式範例", badge: "Demo", content: (
          <>
            <p>DOM 操作：建立 To-Do 清單</p>
            <CodeBlock lang="js" file="todo.js" code={`const input = document.querySelector("#new-todo");
const list = document.querySelector("#todo-list");

document.querySelector("#add").addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;
  li.addEventListener("click", () => li.classList.toggle("done"));

  list.appendChild(li);
  input.value = "";
});`} />

            <p>串接 API 顯示資料：</p>
            <CodeBlock lang="js" file="api.js" code={`async function loadPosts() {
  const container = document.querySelector("#posts");
  container.innerHTML = "Loading...";

  try {
    const res = await fetch("https://api.example.com/posts");
    const posts = await res.json();

    container.innerHTML = posts
      .map(p => \`<article><h3>\${p.title}</h3><p>\${p.body}</p></article>\`)
      .join("");
  } catch (err) {
    container.textContent = "載入失敗：" + err.message;
  }
}

loadPosts();`} />
          </>
        )},
        { label: "程式清單", badge: 6, content: (
          <>
            <Collapse title="變數宣告" meta="3 關鍵字" defaultOpen>
              <ul>
                <li><code>const</code> — 常數（不可重新指派）</li>
                <li><code>let</code> — 變數（可重新指派）</li>
                <li><code>var</code> — 舊式語法（不建議使用）</li>
              </ul>
            </Collapse>
            <Collapse title="陣列方法" meta="6 個方法">
              <ul>
                <li><code>map()</code> — 轉換每個元素</li>
                <li><code>filter()</code> — 過濾元素</li>
                <li><code>reduce()</code> — 累積成單一值</li>
                <li><code>find()</code> — 找出第一個符合的元素</li>
                <li><code>some() / every()</code> — 條件判斷</li>
                <li><code>forEach()</code> — 逐個執行</li>
              </ul>
            </Collapse>
            <Collapse title="DOM 操作" meta="5 個方法">
              <ul>
                <li><code>document.querySelector()</code> — 選取單一元素</li>
                <li><code>document.querySelectorAll()</code> — 選取所有元素</li>
                <li><code>el.addEventListener()</code> — 監聽事件</li>
                <li><code>el.classList.add / remove / toggle</code> — 操作 class</li>
                <li><code>el.textContent / innerHTML</code> — 設定內容</li>
              </ul>
            </Collapse>
            <Collapse title="非同步" meta="4 個工具">
              <ul>
                <li><code>fetch()</code> — 發送 HTTP 請求</li>
                <li><code>Promise</code> — 非同步處理基礎</li>
                <li><code>async / await</code> — 非同步語法糖</li>
                <li><code>setTimeout / setInterval</code> — 計時器</li>
              </ul>
            </Collapse>
            <Collapse title="模組系統" meta="2 個關鍵字">
              <ul>
                <li><code>import</code> — 匯入模組</li>
                <li><code>export</code> — 匯出模組</li>
              </ul>
            </Collapse>
            <Collapse title="物件解構" meta="2 個語法">
              <ul>
                <li><code>{`const { a, b } = obj;`}</code> — 物件解構</li>
                <li><code>{`const [x, y] = arr;`}</code> — 陣列解構</li>
              </ul>
            </Collapse>
          </>
        )},
      ]} />
    </>
  );
}

// =============== REACT ===============
function ReactPage() {
  return (
    <>
      <div className="page-eyebrow">前端網頁程式 / 04</div>
      <h1 className="page-title">React</h1>
      <p className="page-subtitle">
        React 是用來建構使用者介面的元件函式庫。以「元件 + 狀態」為核心，將複雜的 UI 拆解成可重用的小單位。
      </p>

      <Tabs tabs={[
        { label: "程式語法", badge: "Syntax", content: (
          <>
            <SectionTitle hash="component">函式元件</SectionTitle>
            <CodeBlock lang="jsx" file="Greeting.jsx" code={`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// 使用
<Greeting name="小明" />`} />

            <SectionTitle hash="state">useState 狀態</SectionTitle>
            <CodeBlock lang="jsx" file="Counter.jsx" code={`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>目前數字：{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`} />

            <SectionTitle hash="effect">useEffect 副作用</SectionTitle>
            <CodeBlock lang="jsx" file="UserList.jsx" code={`import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(setUsers);
  }, []);  // [] 表示只執行一次

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`} />
          </>
        )},
        { label: "程式範例", badge: "Demo", content: (
          <>
            <p>完整的 To-Do 應用程式：</p>
            <CodeBlock lang="jsx" file="TodoApp.jsx" code={`import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const add = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const toggle = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="輸入待辦事項"
      />
      <button onClick={add}>新增</button>

      <ul>
        {todos.map(t => (
          <li
            key={t.id}
            onClick={() => toggle(t.id)}
            style={{ textDecoration: t.done ? "line-through" : "none" }}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`} />
          </>
        )},
        { label: "程式清單", badge: 5, content: (
          <>
            <Collapse title="核心 Hooks" meta="5 個" defaultOpen>
              <ul>
                <li><code>useState</code> — 元件狀態</li>
                <li><code>useEffect</code> — 副作用（API、訂閱、計時器）</li>
                <li><code>useRef</code> — 持有可變參考</li>
                <li><code>useMemo</code> — 計算結果記憶化</li>
                <li><code>useCallback</code> — 函式記憶化</li>
              </ul>
            </Collapse>
            <Collapse title="JSX 語法" meta="4 規則">
              <ul>
                <li>必須回傳單一根元素（或用 <code>{`<>...</>`}</code> Fragment）</li>
                <li>屬性使用駝峰式：<code>className</code>、<code>onClick</code></li>
                <li>使用 <code>{`{ }`}</code> 嵌入 JS 表達式</li>
                <li>列表渲染需要 <code>key</code> 屬性</li>
              </ul>
            </Collapse>
            <Collapse title="元件間溝通" meta="3 種方式">
              <ul>
                <li><code>props</code> — 父傳子</li>
                <li>callback function — 子傳父</li>
                <li><code>useContext</code> — 跨層級共享</li>
              </ul>
            </Collapse>
            <Collapse title="條件渲染" meta="3 種寫法">
              <ul>
                <li><code>{`{cond && <X/>}`}</code> — 短路</li>
                <li><code>{`{cond ? <A/> : <B/>}`}</code> — 三元運算</li>
                <li>提前 <code>return null</code></li>
              </ul>
            </Collapse>
            <Collapse title="常用生態系" meta="4 個">
              <ul>
                <li><code>react-router</code> — 路由</li>
                <li><code>zustand / redux</code> — 全域狀態</li>
                <li><code>react-query</code> — 資料快取</li>
                <li><code>vite</code> — 開發伺服器</li>
              </ul>
            </Collapse>
          </>
        )},
      ]} />
    </>
  );
}

// =============== PYTHON ===============
function PythonPage() {
  return (
    <>
      <div className="page-eyebrow">後端網頁程式 / 01</div>
      <h1 className="page-title">Python</h1>
      <p className="page-subtitle">
        Python 是一門易讀、易學的後端語言。透過 Flask 或 FastAPI 框架，可以快速建立 Web API 服務。
      </p>

      <Tabs tabs={[
        { label: "程式語法", badge: "Syntax", content: (
          <>
            <SectionTitle hash="basic">基本語法</SectionTitle>
            <CodeBlock lang="python" file="basic.py" code={`# 變數（不需宣告型別）
name = "小明"
age = 25
items = [1, 2, 3]
user = {"name": name, "age": age}

# 函式
def greet(name="Guest"):
    return f"Hello, {name}!"

# 條件 / 迴圈
for item in items:
    if item > 1:
        print(item)`} />

            <SectionTitle hash="class">類別</SectionTitle>
            <CodeBlock lang="python" file="class.py" code={`class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hi, I'm {self.name}"

u = User("小明", 25)
print(u.greet())`} />
          </>
        )},
        { label: "程式範例", badge: "Demo", content: (
          <>
            <p>使用 Flask 建立 Web API：</p>
            <CodeBlock lang="python" file="app.py" code={`from flask import Flask, jsonify, request

app = Flask(__name__)

users = []

@app.route("/api/users", methods=["GET"])
def list_users():
    return jsonify(users)

@app.route("/api/users", methods=["POST"])
def create_user():
    data = request.get_json()
    user = {"id": len(users) + 1, "name": data["name"]}
    users.append(user)
    return jsonify(user), 201

if __name__ == "__main__":
    app.run(debug=True, port=5000)`} />

            <p>FastAPI 範例（現代化非同步框架）：</p>
            <CodeBlock lang="python" file="main.py" code={`from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI"}

@app.post("/items")
async def create_item(item: Item):
    return {"item": item, "ok": True}`} />

            <Callout>
              <strong>執行：</strong>使用 <code>uvicorn main:app --reload</code> 啟動 FastAPI 開發伺服器。
            </Callout>
          </>
        )},
        { label: "程式清單", badge: 4, content: (
          <>
            <Collapse title="核心語法" meta="5 個" defaultOpen>
              <ul>
                <li>變數與型別（無需宣告）</li>
                <li><code>def</code> — 函式定義</li>
                <li><code>class</code> — 類別定義</li>
                <li><code>if / elif / else</code> — 條件</li>
                <li><code>for / while</code> — 迴圈</li>
              </ul>
            </Collapse>
            <Collapse title="資料結構" meta="4 種">
              <ul>
                <li><code>list</code> — 串列 <code>[1, 2, 3]</code></li>
                <li><code>tuple</code> — 元組 <code>(1, 2, 3)</code></li>
                <li><code>dict</code> — 字典 <code>{`{"a": 1}`}</code></li>
                <li><code>set</code> — 集合 <code>{`{1, 2, 3}`}</code></li>
              </ul>
            </Collapse>
            <Collapse title="常用 Web 框架" meta="3 個">
              <ul>
                <li><code>Flask</code> — 輕量、靈活，新手友善</li>
                <li><code>FastAPI</code> — 現代化、支援非同步、自動產生 API 文件</li>
                <li><code>Django</code> — 全功能，內建 ORM、Admin、表單系統</li>
              </ul>
            </Collapse>
            <Collapse title="資料庫工具" meta="3 個套件">
              <ul>
                <li><code>SQLAlchemy</code> — ORM（物件關聯映射）</li>
                <li><code>psycopg2</code> — PostgreSQL 驅動</li>
                <li><code>pymongo</code> — MongoDB 客戶端</li>
              </ul>
            </Collapse>
          </>
        )},
      ]} />
    </>
  );
}

Object.assign(window, { JsPage, ReactPage, PythonPage });

