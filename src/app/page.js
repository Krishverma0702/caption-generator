export default function Home() {
  return (
    <main className="p-4">
      <header className="flex justify-between mb-4 max-w-2xl mx-auto">
        <a href="">Caption Generator</a>
        <nav className="flex gap-6">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </nav>
      </header>

      <div>
        <h1>Add Captions to your videos</h1>
        <h2>Just upload your videos and we will do the rest</h2>
      </div>

      <div>Choose File</div>
    </main>
  );
}
