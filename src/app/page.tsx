import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="w-full flex-1 flex p-5 justify-center bg-gradient-to-r from-blue-600 from-20% via-sky-300 via-50% to-blue-600 to-80%">
        <div className="max-w-[1028px] grid grid-cols-4 gap-1">
          <div className="col-span-3 bg-amber-50/50 rounded p-4">
            <div className="text-center font-bold text-[24px] mb-3">
              Public Game Lobbies
            </div>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>Host</th>
                  <th>Players</th>
                  <th>Room Code</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-1">
            <div className="bg-amber-50/50 rounded p-4">
              <div className="font-bold mb-2">Join Private Lobby</div>
              <div className="flex gap-1">
                <input
                  className="outline-none border border-gray-500 rounded px-1"
                  placeholder="Enter Room code"
                />
                <button className="cursor-pointer bg-green-600 hover:bg-green-500 text-white font-bold px-2 py-1 rounded">
                  Join
                </button>
              </div>
            </div>
            <div className="bg-amber-50/50 rounded p-4">
              <div className="font-bold mb-2">Host a Game</div>
              <div className="flex flex-col gap-1">
                <button className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white font-bold px-2 py-1 rounded">
                  Create Public Lobby
                </button>
                <button className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white font-bold px-2 py-1 rounded">
                  Create Private Lobby
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
