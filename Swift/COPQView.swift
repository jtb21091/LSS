import SwiftUI

struct COPQView: View {
    @State private var internalFailureCost = ""
    @State private var externalFailureCost = ""
    @State private var appraisalCost = ""
    @State private var preventionCost = ""
    
    var totalCOPQ: Double {
        let internalCost = Double(internalFailureCost) ?? 0
        let externalCost = Double(externalFailureCost) ?? 0
        let appraisal = Double(appraisalCost) ?? 0
        let prevention = Double(preventionCost) ?? 0
        return internalCost + externalCost + appraisal + prevention
    }
    
    var body: some View {
        VStack {
            Form {
                Section(header: Text("Input COPQ Data")) {
                    TextField("Internal Failure Cost", text: $internalFailureCost)
                        .keyboardType(.decimalPad)
                    TextField("External Failure Cost", text: $externalFailureCost)
                        .keyboardType(.decimalPad)
                    TextField("Appraisal Cost", text: $appraisalCost)
                        .keyboardType(.decimalPad)
                    TextField("Prevention Cost", text: $preventionCost)
                        .keyboardType(.decimalPad)
                }
                
                Section(header: Text("Results")) {
                    Text("Total COPQ: $\(totalCOPQ, specifier: "%.2f")")
                }
            }
        }
        .navigationTitle("Cost of Poor Quality")
    }
}
