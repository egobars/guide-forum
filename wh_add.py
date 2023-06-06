import json

in_file = open('guides.txt', 'r')
js = {}

for i in range(50):
    now = in_file.readline()
    js[str(i)] = json.loads(now)

js_json = json.dumps(js)
in_file.close()

out = open('guides-out.txt', 'w')
js_json = str(js_json)
js_json.replace('\"', '"')
print(js_json, file=out)
out.close()
