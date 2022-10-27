import React from "react"
import { Switch } from "@headlessui/react"

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full">
      <Switch className="relative inline-flex h-6 w-12 items-center rounded-full ui-checked:bg-blue-600 bg-gray-200">
        <span className="sr-only">Enable notifications</span>
        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1 ui-checked:translate-x-6" />
      </Switch>
    </div>
  )
}

export default App
