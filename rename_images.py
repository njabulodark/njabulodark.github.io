#!/usr/bin/env python3
"""
Script to rename all image files in a directory structure to be iterable (pic1.jpg, pic2.jpg, etc.)
"""

import os
import glob
from pathlib import Path

def get_image_extensions():
    """Return a set of common image file extensions."""
    return {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'}

def rename_images_in_directory(root_dir):
    """
    Rename all image files in the given directory and subdirectories
    to pic1.jpg, pic2.jpg, etc.
    """
    image_extensions = get_image_extensions()
    
    # Find all image files recursively
    image_files = []
    for extension in image_extensions:
        pattern = os.path.join(root_dir, f"**/*{extension}")
        image_files.extend(glob.glob(pattern, recursive=True))
    
    # Sort the files to ensure consistent ordering
    image_files.sort()
    
    print(f"Found {len(image_files)} image files")
    
    # Rename files sequentially
    renamed_count = 0
    for i, old_path in enumerate(image_files, 1):
        try:
            # Get the directory and extension of the original file
            dir_name = os.path.dirname(old_path)
            base_name = os.path.basename(old_path)
            name_without_ext, ext = os.path.splitext(base_name)
            
            # Create new filename
            new_filename = f"pic{i}{ext}"
            new_path = os.path.join(dir_name, new_filename)
            
            # Skip if already named correctly
            if old_path == new_path:
                continue
                
            # Rename the file
            os.rename(old_path, new_path)
            print(f"Renamed: {base_name} -> {new_filename}")
            renamed_count += 1
            
        except Exception as e:
            print(f"Error renaming {old_path}: {e}")
    
    print(f"\nSuccessfully renamed {renamed_count} files")

def main():
    # Get the directory where this script is located
    current_dir = os.path.dirname(os.path.abspath(__file__))
    images_dir = os.path.join(current_dir, "public", "images", "events", "business_lunch")
    
    if not os.path.exists(images_dir):
        print(f"Error: Images directory {images_dir} does not exist")
        return
    
    print("Renaming all image files in:", images_dir)
    rename_images_in_directory(images_dir)

if __name__ == "__main__":
    main()
