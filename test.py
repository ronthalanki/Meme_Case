import random

input = "my name is Ron and i never learned how to read"

spaces = []
sum_spaces = 0
for _ in range(100):
	sum_spaces += random.randint(1,3)
	spaces.append(sum_spaces)
output = ""

index = 0
spaces_index = 0

while index < len(input):
	if (index == spaces[spaces_index]):
		output += input[index].upper()
		spaces_index += 1
	else:
		output += input[index].lower()
	index += 1

print(output)

