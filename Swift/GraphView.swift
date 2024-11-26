import SwiftUI
import Charts

struct GraphView: View {
    var data: [Double]
    var title: String
    
    var body: some View {
        VStack {
            Text(title)
                .font(.headline)
            
            Chart {
                ForEach(Array(data.enumerated()), id: \.offset) { index, value in
                    BarMark(
                        x: .value("Index", index),
                        y: .value("Value", value)
                    )
                }
            }
            .frame(height: 300)
        }
        .padding()
    }
}
