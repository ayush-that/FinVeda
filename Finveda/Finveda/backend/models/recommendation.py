def get_recommendations(preferences):
    # Sample recommendation system based on dummy preferences.
    recommendations = ["Stock A", "ETF B", "Commodity C"] if preferences['risk_tolerance'] == 'High' else ["Bond X", "Mutual Fund Y"]
    return {'recommendations': recommendations}
