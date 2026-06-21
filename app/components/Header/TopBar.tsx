const TopBar=()=> {
  return (
    <div className="bg-green-600 text-white">
      <div className="container mx-auto flex h-10 items-center justify-between px-4 text-sm">
        <p>
          Store location: New York, USA | Discount 50%
        </p>

        <div className="flex items-center gap-5">
          <button>Eng</button>
          <button>USD</button>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
export default TopBar