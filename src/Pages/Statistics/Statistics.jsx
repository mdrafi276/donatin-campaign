import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const myDonations = JSON.parse(localStorage.getItem("donation"));

  let myDonation = 0;
  let main = 0;
  if (myDonations) {
    for (let item of myDonations) {
      myDonation = myDonation + item.amount;
    }
    main = 735 - myDonation;
  }

  const data = [
    { name: "Total Donation", value: main },
    { name: "My Donation", value: myDonation },
  ];
  
  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            
          </Pie>
        </PieChart>
      </div>
      <div className="my-10 max-w-xl mx-auto">
        <div className="flex justify-between px-2">
          <p className="text-lg flex gap-5 items-center">
            Your Donation{" "}
            <div className="w-12 md:w-24 h-4 bg-[#00C49F] rounded"></div>
          </p>
          <p className="text-lg flex gap-5 items-center">
            Total Donation{" "}
            <div className="w-12 md:w-24 h-4 bg-[#FF444A] rounded"></div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
