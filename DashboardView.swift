import SwiftUI

struct DashboardView: View {
    @State private var totalDefects = ""
    @State private var totalUnits = ""
    @State private var opportunitiesPerUnit = ""
    
    @State private var metrics: SixSigmaMetrics?
    
    var body: some View {
        NavigationView {
            VStack {
                Form {
                    Section(header: Text("Input Data")) {
                        TextField("Total Defects", text: $totalDefects)
                            .keyboardType(.numberPad)
                        TextField("Total Units", text: $totalUnits)
                            .keyboardType(.numberPad)
                        TextField("Opportunities per Unit", text: $opportunitiesPerUnit)
                            .keyboardType(.numberPad)
                    }
                    
                    Button("Calculate") {
                        if let defects = Int(totalDefects),
                           let units = Int(totalUnits),
                           let opps = Int(opportunitiesPerUnit) {
                            metrics = SixSigmaMetrics(
                                totalDefects: defects,
                                totalUnits: units,
                                opportunitiesPerUnit: opps
                            )
                        }
                    }
                }
                
                if let metrics = metrics {
                    Section(header: Text("Results")) {
                        Text("DPMO: \(metrics.defectsPerMillionOpportunities, specifier: "%.2f")")
                        Text("Sigma Level: \(metrics.sigmaLevel, specifier: "%.2f")")
                        Text("Process Yield: \(metrics.processYield * 100, specifier: "%.2f")%")
                    }
                }
            }
            .navigationTitle("Six Sigma Dashboard")
        }
    }
}
