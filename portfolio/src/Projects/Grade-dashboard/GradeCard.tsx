import React, { useEffect, useRef } from "react";
import { Instructor } from "./Dashboard";
import Chart from "chart.js/auto"; // Import Chart.js

interface GradeCardProps {
    instructor: Instructor;
}

const GradeCard: React.FC<GradeCardProps> = ({ instructor }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null); // Ref for the canvas element
    const chartInstance = useRef<Chart<"bar"> | null>(null);

    console.log(instructor.gradeDistribution.a);
    // Create the Chart.js instance for instructor grade distribution when the component mounts
    useEffect(() => {
        if (chartRef.current && instructor) {
            // Ensure the Chart instance is destroyed before creating a new one
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext("2d");

            if (ctx) {
                chartInstance.current = new Chart(ctx, {
                    type: "bar",
                    data: {
                        labels: ["A", "B", "C", "D", "F"],
                        datasets: [
                            {
                                data: [
                                    instructor.gradeDistribution.a,
                                    instructor.gradeDistribution.b,
                                    instructor.gradeDistribution.c,
                                    instructor.gradeDistribution.d,
                                    instructor.gradeDistribution.f,
                                ],
                                backgroundColor: [
                                    "rgba(75, 192, 192, 0.2)",
                                    "rgba(54, 162, 235, 0.2)",
                                    "rgba(255, 206, 86, 0.2)",
                                    "rgba(255, 159, 64, 0.2)",
                                    "rgba(255, 99, 132, 0.2)",
                                ],
                                borderColor: [
                                    "rgba(75, 192, 192, 1)",
                                    "rgba(54, 162, 235, 1)",
                                    "rgba(255, 206, 86, 1)",
                                    "rgba(255, 159, 64, 1)",
                                    "rgba(255, 99, 132, 1)",
                                ],
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    },
                });
            }
        }

        // Return a cleanup function to destroy the Chart instance
        return () => {
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
                chartInstance.current = null;
            }
        };
    }, [instructor]); 

    return (
        <div className="professor-card">
            <p>{instructor.name}</p>
            <canvas ref={chartRef}></canvas>
            <p>GPA: {Math.round(instructor.GPA * 100) / 100}</p>
        </div>
    );
};

export default GradeCard;