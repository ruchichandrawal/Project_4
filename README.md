


# Mental Health Dataset Analysis

## About the Dataset

Mental health is a fundamental aspect of human lives and society as a whole. The impact of poor mental health extends beyond individual well-being, affecting work performance, relationships with friends and family, and the broader community.

Mental health conditions are widespread, with millions of people experiencing them annually, and many enduring their effects throughout their lives. Statistics suggest that approximately 1 in 3 women and 1 in 5 men will encounter major depression at some point in their lives. Less common but highly impactful conditions like schizophrenia and bipolar disorder also contribute significantly to individuals' lives.

 	

## Project Description

The main thrust of this project is to analyze data from the year 2014 to gain insights into how various mental health disorders and underlying factors impact mental health. A significant focus lies in examining how the frequency of mental health illness and attitudes towards mental health vary across different geographic locations. By utilizing the 2014 dataset, the project aims to illuminate patterns, correlations, and potential predictors associated with mental health conditions and attitudes.

## Objectives

- Explore variations in the frequency of mental health illnesses across different geographic regions.
- Understand how attitudes towards mental health are influenced by geographical location.
- Identify underlying factors contributing to variations in mental health attitudes.
- Contribute to a broader understanding of mental health dynamics through comprehensive analysis.

Through data exploration, analysis, and visualization, this project seeks to deepen our understanding of the intricate relationship between mental health, geographic location, and attitudes towards mental health.

## Methodology

The project will involve a multi-step process:

1. **Data Cleaning and Preprocessing:** The initial step is to clean and preprocess the survey data, handling missing values, outliers, and ensuring data consistency.

2. **Descriptive Analysis:** Descriptive statistics and visualizations will be used to gain an overview of the dataset, providing initial insights into factors like demographics, prevalence rates, and attitudes.

3. **Inferential Analysis:** Statistical tests and regression models will be employed to identify relationships between variables, potential predictors, and outcomes related to mental health.

4. **Visualization:** Engaging visualizations will be created to effectively communicate findings, making the insights accessible to a wider audience.

5. **Implications and Recommendations:** The project will conclude with implications for the tech industry, including recommendations for fostering a mentally healthy workplace and addressing challenges.

## Insights

The analysis of this mental health dataset offers valuable insights into the complex and multi-faceted landscape of mental health and its interaction with geographic location and attitudes. Through an in-depth examination of the dataset, several key conclusions can be drawn:

1. **Geographic Variation in Mental Health:** The data reveals significant differences in the prevalence of mental health illnesses and attitudes towards mental health across different geographic regions. This underscores the influence of cultural, societal, and regional factors on mental health perceptions.

2. **Stigma and Disclosure:** The dataset's limitations and strengths highlight the delicate nature of mental health discussions. While survey data allows for broader inclusion, the reluctance to share symptoms and the potential impact of cultural norms on disclosure are factors to consider.

3. **Need for Contextual Understanding:** The project underscores the importance of considering the broader context when interpreting mental health data. Cultural nuances, historical changes, and generational differences play a crucial role in shaping mental health attitudes and perceptions.

4. **Supportive Workplaces:** The survey data suggests that individuals' willingness to discuss mental health varies across different stakeholders in the workplace, such as supervisors and coworkers. These findings emphasize the need for workplaces to foster open and supportive environments for mental health discussions.

5. **Data-Driven Insights:** The project's approach of analyzing survey data to explore mental health trends serves as a model for generating data-driven insights. These insights can contribute to informed decision-making and the development of strategies to address mental health challenges.

## Individual Contribution
**Emily Curlin**

3 AI models were created to determine which factors most strongly predict 1. If an employee will seek mental health treatment and an additional 3 models to determine which factors most strongly predict 2. If an employee will report that their mental health interferes with their work. Models used include: Logistic regression, decison tree classifier, and random forest classifier. All models were assessed for precision, recall, and accuracy using confusion matrix. Features of importance were identified based on the Random Forest Model.
![image](https://github.com/ruchichandrawal/Project_4/blob/main/test_emily/Visualizations/Feature%20Importances%20for%20Predicting%20Employee%20to%20Seek%20MH%20Treatment.png)
![image](https://github.com/ruchichandrawal/Project_4/blob/main/test_emily/Visualizations/Feature%20Importances%20for%20Predicting%20Employee%20Report%20of%20MH%20Interfering%20with%20Work.png)

# Comparison of Females vs Males Who Seek Treatment for Poor Mental Health by Age Range - Lauren Phelps

![image](https://github.com/ruchichandrawal/Project_4/assets/127759770/c969bd01-70a5-4eef-b824-dfa5401e5798)
![image](https://github.com/ruchichandrawal/Project_4/assets/127759770/fa985a91-d862-4e1d-92b5-17521f863627)








# Global Mental Disorder Visualization with Tableau - Ruchi Chandrawal

This repository presents an in-depth tableau visualization of five major mental disorders on a global scale. The visualization consists of two interactive dashboards and two insightful stories that delve into the prevalence of mental disorders across different countries in the year 2014. The goal of this project is to provide a clear and comprehensive overview of the countries with the highest and lowest reported cases of mental disorders, shedding light on this critical aspect of global health.

## Introduction

Mental disorders have become a significant global health concern affecting millions of lives worldwide. This Tableau visualization project aims to depict the prevalence of five major mental disorders across various countries during the year 2014. Through interactive dashboards and insightful stories, we aim to provide a deeper understanding of the countries with the highest and lowest reported cases of mental disorders.

## Dashboards

### Dashboard 1: Global Overview

This dashboard provides a comprehensive overview of the prevalence of mental disorders across different continents. Users can interact with the visualizations to explore the distribution of disorders and compare the relative rates between regions.

### Dashboard 2: Country-Level Analysis

In this dashboard, users can select specific countries of interest and visualize the prevalence of mental disorders within those countries. The dashboard also offers a temporal view, allowing users to observe trends in mental disorder rates over time.

## Stories

### Story 1: Identifying High-Risk Countries and low risk countries

This story focuses on countries with the highest and lowest reported cases of mental disorders in 2014. Through a combination of visualizations, it highlights the regions where mental disorders were most prevalent and least prevalent provides potential factors contributing to these rates.

### Story 2: Analysis of mental disorder in Countries
This story shows final analysis of countries

## Methodology

The visualization is built using Tableau, leveraging its interactive features to enable users to explore the data dynamically. The data was cleaned, transformed, and aggregated to fit the visualization's scope, ensuring accuracy in the representation of mental disorder prevalence.

## Tableau work link

https://public.tableau.com/app/profile/ruchi.chandrawal/viz/WorldwideMentalHealthDisorderIn2014/Story2?publish=yes






# Initial Cleaning and Exploring of Survey.CSV file - Steve Tuttle
Creating Exploration file called `survey_data_exploration.ipynb` to determine what needs to be fixed/cleaned in the preprocessing step of the project. In this file, I will determine the true size of the file, the content of column, and what if any issues there are with the data (and the most efficient way to address them before starting into the "main" code). Some of the larger concerns were as follows:

### There were intitially 49 Unique Genders in the Dataset
A few were simply nonsense answers, i.e. "A little about you" or "Nah". Some simply did not want to be classified in the traditional sense, i.e. "non-binary" or "Genderqueer". While many others were individuals not maintaining a consistent way of spelling 'Male' and 'Female' with examples including "male", "M", "Cis Male", and even "Mail" and really everything in between. After going through the list, the Gender categories were narrowed to just three: 'Male', 'Female', and 'Other'. Other would represent the genders who were not clearly defined, as well as the trans community. The traditional 'Male' and 'Female' categories are more self explanatory. 

### The Age column had Bogus Age vValues
There were 5 values in this column that were either negative or well over 100. In either case we know this is not accurate but if we want incude that count it needs to be addressed. We decided to replace any value less than 0 OR greater than 99 with 404 (for error) to use in a later code. This later code included binning the Ages into age_ranges.

## Initial Cleaning and Preprocessing
Started the main file, `survey_data_cleaned.ipynb` performing the initial cleaning and preprocessing of the data.

### Create Bar Charts to display the participants willingness to discuss Mental Health issues 
There will be one chart for `coworkers` and another for `supervisor`. First I will create DataFrames that groupby `age_range`, `Gender`, and `coworkers` or `supervisor`. Categories for the chart will include 'Yes,' 'No,' and 'Some of them' just like columns. The grouped data will then be filtered by combination of `age_range` and `Gender` and then we will count the occurrences of each category_count collected for each category of age range and gender. Finally, the category_counts are appended to the list. Now, we will plot the columns for each category in the chart, then set the labels and title.

![coworkers_barchart](https://github.com/ruchichandrawal/Project_4/blob/main/test_steve/Image/discuss_coworkers.png)

![supervisor_barchart](https://github.com/ruchichandrawal/Project_4/blob/main/test_steve/Image/discuss_supervisor.png)



# Pie Chart percentage of each answer in survey - Tye Smith

Note: The pie chart shows 73 percent of all survey answers are mixed with no correlation, meanwhile all data that shows any kind of trend is under 20 percent. This shows that working from home vs not working from home is not a predictor of whather someone will show mental and physical illness.

![alt text](https://github.com/ruchichandrawal/Project_4/blob/main/test_tye/images/Pie_chart_edited.png)

## Correlation Coefficient
Note: The Correlation COefficient concludes that remote work vs mental health does not have a relationship with a coefficient of (-0.0073). It would need to be closer to -1 or 1 to show any kind of significance in regards to a relationship between remote work and mental health.
![alt text](https://github.com/ruchichandrawal/Project_4/blob/main/test_tye/images/Screenshot%20(37).png)





## Tyler Williams
[Interactive Map](./test_tyler/index.html)
![Map of Eating Disorders](./test_tyler/screenshot1.PNG)
![Map of Anxiety and Depression](./test_tyler/screenshot2.PNG)


## Conclusion

In conclusion, the analysis of this mental health dataset contributes to a deeper understanding of the relationship between mental health, geography, and attitudes. By examining the frequency of mental health illnesses and their associated attitudes, this project provides valuable insights that can guide efforts to promote mental health awareness, reduce stigma, and create more supportive and inclusive communities and workplaces.

## Contributors:
- Emily Curlin (Emily.curlin@outlook.com)
- Lauren Phelps (laphelps08@outlook.com)
- Ruchi Chandrawal (Ruchichandrawal@gmail.com)
- Steve Tuttle (s_tuttle80@msn.com)
- Tye Smith (Tyesmith44@gmail.com)
- Tyler Williams (ntylerwilliams@gmail.com)
