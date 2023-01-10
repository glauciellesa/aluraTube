import { createClient } from "@supabase/supabase-js"

const PROJEXT_URL = "https://arbupvkclgayzquiusid.supabase.co"
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyYnVwdmtjbGdheXpxdWl1c2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0MTI3OTksImV4cCI6MTk4Mzk4ODc5OX0.H7IU2evIWH0SsF9WCn5Pa5nrW3yuejgQgcUIh55VVOU"
const supabase = createClient(PROJEXT_URL, API_KEY)

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("playlist").select("*")
    },
  }
}
