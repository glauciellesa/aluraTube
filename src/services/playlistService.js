import { createClient } from "@supabase/supabase-js"

const PROJEXT_URL = "https://pdufmujcdvkrixflycfq.supabase.co"
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdWZtdWpjZHZrcml4Zmx5Y2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MDgxNzAsImV4cCI6MTk4NDA4NDE3MH0.NgZQjB_sBVFH-Hmx5QR-63V0juQzhiJyEqgAiSGlKCk"
const supabase = createClient(PROJEXT_URL, API_KEY)

export default {
  getAllVideos() {
    return supabase.from("playlist").select("*")
  },
  addVideo(video) {
    return supabase.from("playlist").insert(video).select()
  },
  removeVideo(id) {
    return supabase.from("playlist").delete().eq("id", id)
  },
}
