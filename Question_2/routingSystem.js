// Designing an efficient school bus routing algorithm that ensures timely pickups and drop-offs while meeting safety, 
// accessibility, and other logistical needs involves several key factors, including time constraints, traffic conditions,
//  and student-specific requirements. Here’s a high-level breakdown of an algorithm to meet these objectives:

const students = [
    { id: 'M001', location: [10.290270, 30.821945] },
    { id: 'M002', location: [10.292030, 30.822001] },
    { id: 'M003', location: [10.289000, 30.819001] },
  ];
const busStops = [
    { id: 'B001', location: [10.291000, 30.820000] },
    { id: "B002", location: [10.293000, 30.823000] },
];
const busCapacity = 2;
const buses = {};
function distance(p1, p2){
    const dx = p1[0] - p2[0];
    const dy = p1[1] - p2[1];
    return Math.sqrt(dx * dx + dy * dy);
}
students.forEach(student => {
    const closeby = busStops.reduce((a, b) =>
      distance(student.location, a.location) < distance(student.location, b.location) ? a : b
    );
    if (!buses[closeby.id]) buses[closeby.id] = [];
    buses[closeby.id].push(student.id);
  });
 
for(const stop in buses) {
    const group = buses[stop];
    const grouped = [];
    for (let i = 0; i < group.length; i += busCapacity) {
      grouped.push(group.slice(i, i + busCapacity));
    }
    console.log(`Stop ${stop} buses:`, grouped);
  }