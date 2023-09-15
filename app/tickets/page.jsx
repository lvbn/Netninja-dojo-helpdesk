import { Suspense } from "react"
import TicketList from "./TicketList.jsx"
import Loading from "../loading.jsx"


export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>currently open tickets.</small></p>
        </div>
      </nav>

      {/*
        The Suspense component wraps only what has to display the loading component.
        Without The Suspense component the entire Tickets component will be automatically wrapped and the loading component will appear in front of everything.
       */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}
