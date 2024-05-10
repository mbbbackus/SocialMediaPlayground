import os
import django
from faker import Faker

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from posts.models import Post

fake = Faker()

def create_fake_posts(num_posts):
    for _ in range(num_posts):
        title = fake.sentence(nb_words=6, variable_nb_words=True)
        content = fake.paragraph(nb_sentences=10, variable_nb_sentences=True)
        post = Post(title=title, content=content)
        post.save()

    print(f'{num_posts} fake posts created successfully!')

# Usage example
create_fake_posts(50)