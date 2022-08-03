export default function Meme() {
  return (
    <main>
      <form>
        <div className="inputs">
          <input type="text" placeholder="Upper phrase" />
          <input type="text" placeholder="Lower phrase" />
        </div>

        <button>Get a new meme image</button>
      </form>
    </main>
  );
}
