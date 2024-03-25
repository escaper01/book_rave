import requests




def add_review()
url = "{{domain}}/api/v1/review/add_review/314"

payload = {'title': 'Animi dolores rem consequatur consequatur adipisci magnam voluptatem.',
'content': 'Tempore maxime explicabo reprehenderit necessitatibus accusantium eius corrupti nam vero. Dolores qui neque quae. Quas culpa provident. Natus nulla occaecati repellat neque ullam veritatis.
 
Accusamus atque ut asperiores numquam consectetur minus tempora nihil eius. Sit quis dolorum et dolorem blanditiis cumque labore. Officia dolorum amet et aut minima fugiat sunt et asperiores.
 
Mollitia illo quos in asperiores eius voluptatibus est quia. Nihil quaerat commodi quia non ut veniam sed sit totam. Odio delectus voluptas ut ut dolore rerum eveniet tempora. Velit placeat rem consequuntur. Animi aut rem dolores similique. Sequi incidunt ad sed est iusto in doloremque praesentium.',
'rating': '5'}
files=[
  ('media',('Reading-scaled.webp',open('/C:/Users/escaper/Downloads/Reading-scaled.webp','rb'),'image/webp'))
]
headers = {
  'Authorization': 'Bearer {{accessToken}}'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
