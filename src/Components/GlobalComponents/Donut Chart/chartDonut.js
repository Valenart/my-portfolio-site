import { PieChart } from '@mui/x-charts/PieChart';

export default function ChartDonut () {
    return (

        <PieChart style={{ width: '200px', height: '200px', display: 'flex', alignItems: 'center' }}
            series={[
                {
                    data: [
                        { id: 0, value: 58 },
                        { id: 1, value: 7 },
                        { id: 2, value: 19 },
                        { id: 3, value: 20 },
                    ],
                    innerRadius: 50,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 2,
                    startAngle: 0,
                    endAngle: 360,
                    cx: 150,
                    cy: 150,
                }
            ]}
        />
    )
}

