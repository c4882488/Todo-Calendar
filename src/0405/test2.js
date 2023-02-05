import React from "react";

function OrderDashboard(props) {
  const { unprocessedOrderIds } = props;
  return (
    <div>
      {unprocessedOrderIds.length > 0 && (
        <span>
          注意，您有 <strong>{unprocessedOrderIds.length}</strong>{" "}
          筆訂單尚未處理。
        </span>
      )}
    </div>
  );
}

function App() {
  const unprocessedOrderIds = ["MO1", "MO2", "MO3", "M04"];
  return <OrderDashboard unprocessedOrderIds={unprocessedOrderIds} />;
}

export default App;
