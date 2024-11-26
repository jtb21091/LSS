import Foundation

struct SixSigmaMetrics {
    var totalDefects: Int
    var totalUnits: Int
    var opportunitiesPerUnit: Int
    
    var totalOpportunities: Int {
        totalUnits * opportunitiesPerUnit
    }
    
    var defectsPerMillionOpportunities: Double {
        (Double(totalDefects) / Double(totalOpportunities)) * 1_000_000
    }
    
    var sigmaLevel: Double {
        // Simplified calculation for demo purposes
        1.5 + (5.0 - log10(defectsPerMillionOpportunities))
    }
    
    var processYield: Double {
        1.0 - (Double(totalDefects) / Double(totalOpportunities))
    }
}
