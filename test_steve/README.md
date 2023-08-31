# Project_4

## Initial Cleaning and Exploring of Survey.CSV file
Creating Exploration file called `survey_data_exploration.ipynb` to determine what needs to be fixed/cleaned in the preprocessing step of the project. In this file, I will determine the true size of the file, the content of column, and what if any issues there are with the data (and the most efficient way to address them before starting into the "main" code). Some of the larger concerns were as follows:

### There were intitially 49 Unique Genders in the Dataset
A few were simply nonsense answers, i.e. "A little about you" or "Nah". Some simply did not want to be classified in the traditional sense, i.e. "non-binary" or "Genderqueer". While many others were individuals not maintaining a consistent way of spelling 'Male' and 'Female' with examples including "male", "M", "Cis Male", and even "Mail" and really everything in between. After going through the list, the Gender categories were narrowed to just three: 'Male', 'Female', and 'Other'. Other would represent the genders who were not clearly defined, as well as the trans community. The traditional 'Male' and 'Female' categories are more self explanatory. 

### The Age column had Bogus Age vValues
There were 5 values in this column that were either negative or well over 100. In either case we know this is not accurate but if we want incude that count it needs to be addressed. We decided to replace any value less than 0 OR greater than 99 with 404 (for error) to use in a later code. This later code included binning the Ages into age_ranges.

## Initial Cleaning and Preprocessing
Started the main file, `survey_data_cleaned.ipynb` performing the initial cleaning and preprocessing of the data.

### Create Bar Charts to display the participants willingness to discuss Mental Health issues 
There will be one chart for `coworkers` and another for `supervisor`. First I will create DataFrames that groupby `age_range`, `Gender`, and `coworkers` or `supervisor`. Categories for the chart will include 'Yes,' 'No,' and 'Some of them' just like columns. The grouped data will then be filtered by combination of `age_range` and `Gender` and then we will count the occurrences of each category_count collected for each category of age range and gender. Finally, the category_counts are appended to the list. Now, we will plot the columns for each category in the chart, then set the labels and title.



