const Layout = ({ toolbar, sidebar, viewer, filmstrip }) => {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="shrink-0">
        {toolbar}
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="shrink-0">
          {sidebar}
        </div>
        <div className="flex flex-col flex-1 border-2 border-gray-500">
          <div className="flex-1 overflow-hidden">
            {viewer}
          </div>
          <div className="shrink-0 border-t-2 border-gray-500">
            {filmstrip}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout